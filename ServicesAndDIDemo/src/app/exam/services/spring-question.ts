import { IQuestion } from './i-question';
export class SpringQuestion extends IQuestion{
    askQuestion():string{
        return "what is spring?";
    }
}