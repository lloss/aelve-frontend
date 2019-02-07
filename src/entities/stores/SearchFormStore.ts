import { injectable } from 'inversify'
import { action, observable } from 'mobx';
import {ChangeEvent, FormEvent} from 'react';

import { ISearchFormFields, ISearchFormStore, ISearchItem } from '../../interfaces'

@injectable()
export class SearchFormStore implements ISearchFormStore {
  @observable public searchResults: ISearchItem[];
  @observable public searchFormFields: ISearchFormFields = {};
  @observable public searchFormOptions: string[] = [];

  @action
  public searchCode = (event: FormEvent) => {
    event.preventDefault();
    const fields = Object.entries(this.searchFormFields).filter(([key, value]) => value && key !== '')
    const joinedFields = fields.map(item => item.join('='))
    const options = this.searchFormOptions.map((value: string) => `${value}=true`)
    const query = [...joinedFields, ...options].join('&')
    console.log(query)
  }

  @action
  public handleSearchInput = ({target}: ChangeEvent) => {
    const {name, value} = target as HTMLInputElement;
    this.searchFormFields[name] = value;
  }

  @action
  public handleSearchOptions = ({target}: FormEvent) => {
    const {name} = target as HTMLInputElement;    
    if(this.searchFormOptions.includes(name)) {
      return this.searchFormOptions = this.searchFormOptions.filter((value: string) => value !== name)
    }
    return this.searchFormOptions = [...this.searchFormOptions, name]
  }
}