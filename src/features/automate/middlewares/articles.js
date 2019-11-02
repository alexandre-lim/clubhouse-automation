import { readSingleRange } from '../../spreadsheet/read';
import { getProjects } from '../../clubhouse/projects';
import { createStories } from '../../clubhouse/stories';
import { writeMultipleRanges } from '../../spreadsheet/write';

async function automateArticles() {
  try {
    const projects = await getProjects();
    let readingProjectId = null;
    for (let j = 0, len = projects.length; j < len; j += 1) {
      if (projects[j].name === 'Reading') {
        readingProjectId = projects[j].id;
      }
    }
    if (readingProjectId) {
      const tab = 'Articles';
      const range = 'A3:C15';
      const res = await readSingleRange(tab, range);
      const stories = [];
      const articles = res.values ? res.values : [];
      if (articles.length === 0) return `No new articles in spreadsheet for tab ${tab}`;
      for (let i = 0, len = articles.length; i < len; i += 1) {
        const name = articles[i][0];
        if (name) {
          const description = articles[i][1] ? `${articles[i][1]}\u{000A}` : '';
          const link = articles[i][2] ? `\u{005B}Link\u{005D}\u{0028}${articles[i][2]}\u{0029}` : '';
          const story = {
            name,
            project_id: readingProjectId,
            description: `${description}${link}`,
            labels: [{ name: 'Article' }]
          };
          stories.push(story);
        }
      }
      const resultStories = await createStories(JSON.stringify({ stories }));
      if (resultStories && articles.length === resultStories.length) {
        const body = JSON.stringify({
          valueInputOption: 'USER_ENTERED',
          data: [
            {
              range: `${tab}!${range}`,
              majorDimension: 'ROWS',
              values: [
                ['', '', ''],
              ]
            }
          ]
        });
        return await writeMultipleRanges(body);
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
  automateArticles,
};
