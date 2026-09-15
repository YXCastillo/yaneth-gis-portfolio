import type {Metadata} from "next";import WorkflowArticle from "../workflow-article";import {workflowBySlug} from "../workflow-data";
const workflow=workflowBySlug("public-facing-web-gis")!;export const metadata:Metadata={title:`${workflow.title} | Yaneth Castillo`,description:workflow.intro};export default function Page(){return <WorkflowArticle workflow={workflow}/>}
