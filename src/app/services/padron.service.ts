import { Injectable } from '@angular/core';
import { Padron } from '../models/padron.model';

@Injectable()
export class PadronService {

    private list: Padron[];

    constructor() {
        this.list = [
            {'key': '1', 'label': 'Modulo 1', 'required': false, 'order': 1, 'controlType': 'checkbox', 'visible': true, 'disabled': true, 'type': ''},
            {'key': '2', 'label': 'Modulo 2', 'required': false, 'order': 1, 'controlType': 'checkbox', 'visible': true, 'disabled': true, 'type': ''},
            {'key': '3', 'label': 'Modulo 3', 'required': false, 'order': 1, 'controlType': 'checkbox', 'visible': true, 'disabled': true, 'type': ''},
            {'key': '4', 'label': 'Modulo 4', 'required': false, 'order': 1, 'controlType': 'checkbox', 'visible': true, 'disabled': true, 'type': ''},
        ];
    }

    getListPadron() {
        return this.list;
    }
    searchPadron(text: string): Padron[] {
        const response: Padron[] = [];
        text = text.toLowerCase();
        for (const person of this.list) {
            const name = person.label.toLowerCase();
            if (name.indexOf(text) >= 0) {
                response.push(person);
            }
        }
        return response;
    }
}

