export class CommentModel{
    constructor(
        public author: string = '',
        public replayToId: number = 0,
        public text: string = '',
        public theme: string = '',
        public like: string = ''
    ) { }
}