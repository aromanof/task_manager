import { MembersInterface } from "./members-interface";

export interface TaskInterface {
    taskName: string;
    taskPriority: string;
    assignee: MembersInterface;
}
