export interface Interview {
    id: string,
    position: string,
    description: string
    experience: number,
    userId: string,
    techStack: string,
    questions: {question: string, answer: string}[],
}