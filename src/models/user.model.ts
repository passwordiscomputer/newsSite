import {StoryCollection} from './storyCollection.model'

export class User {

  constructor(public userName: string, public apiKey: string){}

  storyCollectionArray: StoryCollection[];

}
