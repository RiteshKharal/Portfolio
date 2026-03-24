"use server";

import { marked } from "marked";
import { ProjectsDetails } from "../ProjectDetails";

export async function GetReadme(githubURL: string) {
  const backup = `# Failed to fetch github readme. View the short bio instead! ${ProjectsDetails.find((proj)=> proj.github == githubURL)?.description}`  

  try{
  const repourl = new URL(githubURL);

  const path = repourl.pathname.slice(1);

  const res = await fetch(`https://api.github.com/repos/${path}/readme`, {
    headers: {
      Accept: "application/vnd.github.raw",
      Authorization:`Bearer ${process.env.GITHUB_TOKEN}`,
    },
  })

  const markdown = await res.text();
  const readme = marked.parse(String(markdown));

  return readme ;} catch(er){
    console.error(er)
    return backup
  }
}
