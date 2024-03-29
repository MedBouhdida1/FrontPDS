import { Comment } from "./comment.model";
import { Project } from "./project.model";
import { Task } from "./task.model";

export class Stage {

    constructor(
        public id?: string,
        public name?: string,
        public tasks: Task[] = [],
        public comments?: Comment[],
        public project?: Project,

    ) {
    }
}