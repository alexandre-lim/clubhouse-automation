import path from 'path';
import dotenv from 'dotenv';

function initEnvVar() {
  // Config your own APP_DIR until dockerisation
  const APP_DIR = 'D:/\\personnel/\\workspace/\\clubhouse-automation';
  const result = dotenv.config({ path: path.resolve(APP_DIR, '.env') });

  if (result.error) {
    console.error(result.error);
  }
}

export {
  initEnvVar
};


