import { GoogleAuth } from 'google-auth-library';

export async function getClient() {
  const auth = new GoogleAuth({
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
      'https://www.googleapis.com/auth/cloud-platform',
    ],
  });
  return await auth.getClient();
}
