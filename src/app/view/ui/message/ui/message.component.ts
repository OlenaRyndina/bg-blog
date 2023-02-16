import { 
    Component,  
    Input,
    OnChanges, 
    SimpleChanges } from '@angular/core';

import { Message } from './message.model';
import { fadeState } from '../../animations/fade.animation';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  animations: [fadeState]
})
export class MessageComponent implements OnChanges {
    
    @Input() createMessage: Message;

    ngOnChanges(changes: SimpleChanges){
        this.hideMessage();
    }

    hideMessage() {
        window.setTimeout(() => {
            this.createMessage.text = '';
        }, 3000);
    } 
}
