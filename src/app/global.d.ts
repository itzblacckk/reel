declare module '@sasmeee/igdl' {
    export default function instagramDl(url: string): Promise<{ thumbnail_link: string, download_link: string }>;
  }
  