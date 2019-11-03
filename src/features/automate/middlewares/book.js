import { readMultipleRanges } from '../../spreadsheet/read';
import { getProjects } from '../../clubhouse/projects';
import { createStories } from '../../clubhouse/stories';
import { writeMultipleRanges } from '../../spreadsheet/write';
import { getEpics, createEpics } from '../../clubhouse/epics';

async function automateBook() {
  try {
    const projects = await getProjects();
    let readingProjectId = null;
    for (let j = 0, len = projects.length; j < len; j += 1) {
      if (projects[j].name === 'Reading') {
        readingProjectId = projects[j].id;
      }
    }
    if (readingProjectId) {
      const tab = 'Book';
      const rangesBook = {
        title: 'A3:A3',
        author: 'A6:A6',
        chapters: 'C4:C',
      };
      const rangeBookTitle = `ranges=${tab}!${rangesBook.title}`;
      const rangeBookAuthor = `ranges=${tab}!${rangesBook.author}`;
      const rangerChapters = `ranges=${tab}!${rangesBook.chapters}`;
      const params = 'valueRenderOption=UNFORMATTED_VALUE&majorDimension=COLUMNS';
      const ranges = `${rangeBookTitle}&${rangeBookAuthor}&${rangerChapters}&${params}`;

      const bookData = await readMultipleRanges(ranges);

      if (Array.isArray(bookData.valueRanges)) {
        const bookTitleObj = bookData.valueRanges.shift();
        const bookAuthorObj = bookData.valueRanges.shift();
        const bookTitle = bookTitleObj.values ? bookTitleObj.values[0][0].trim() : '';
        const bookAuthor = bookAuthorObj.values ? bookAuthorObj.values[0][0].trim() : '';
        let erroMessage = 'Book title is empty';
        let validMessage = '';

        if (bookTitle !== '') {
          const epics = await getEpics();
          const epicFound = epics.filter(epic => epic.name === bookTitle);
          let epicId = null;

          if (epicFound.length > 1) {
            return `Many epics with name ${bookTitle} found, please have a unique epic name`;
          }

          if (epicFound.length === 0) {
            const epicBody = JSON.stringify({
              name: bookTitle,
              description: bookAuthor,
              labels: [{ name: 'Book' }]
            });

            const createdEpic = await createEpics(epicBody);

            epicId = createdEpic.id;
            validMessage += `Epic ${bookTitle} created.`;
          } else {
            epicId = epicFound[0].id;
          }

          const chapters = bookData.valueRanges[0].values ? bookData.valueRanges[0].values[0] : [];
          const chaptersToDelete = [];
          const stories = [];

          if (chapters.length > 0) {
            for (let i = 0, len = chapters.length; i < len; i += 1) {
              const chapterName = chapters[i].trim();
              if (chapterName !== '') {
                stories.push({
                  name: chapterName,
                  project_id: readingProjectId,
                  epic_id: epicId,
                  labels: [{ name: 'Book' }]
                });
              }
              chaptersToDelete.push('');
            }

            await createStories(JSON.stringify({ stories }));
            validMessage += validMessage !== '' ? ` Chapters was created for epic ${bookTitle}` : `Chapters was created for epic ${bookTitle}`;
          } else {
            validMessage += validMessage !== '' ? ` No chapters were created for epic ${bookTitle}` : `No chapters were created for epic ${bookTitle}`;
          }

          const body = JSON.stringify({
            valueInputOption: 'USER_ENTERED',
            data: [
              {
                range: `${tab}!${rangesBook.title}`,
                majorDimension: 'COLUMNS',
                values: [
                  ['']
                ]
              },
              {
                range: `${tab}!${rangesBook.author}`,
                majorDimension: 'COLUMNS',
                values: [
                  ['']
                ]
              },
              {
                range: `${tab}!${rangesBook.chapters}`,
                majorDimension: 'COLUMNS',
                values: [
                  chaptersToDelete
                ]
              },
            ]
          });

          await writeMultipleRanges(body);
        }
        return validMessage !== '' ? validMessage : erroMessage;
      }
    } else {
      return 'Reading project not found';
    }
  } catch (e) {
    console.log(e);
    return e.message;
  }
}

export {
  automateBook,
};
