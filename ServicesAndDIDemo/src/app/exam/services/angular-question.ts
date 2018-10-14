import { IQuestion } from './i-question';
export class AngularQuestion extends IQuestion{
    askQuestion():string{
        return "what is angular?";
    }
}