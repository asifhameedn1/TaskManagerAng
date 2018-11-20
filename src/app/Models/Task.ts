export class Task {
    id: number;
    taskName: string;
    priority: number;
    parentID: number;
    parentName: string;
    startDate: Date;
    endDate: Date;
    status: boolean;
}
