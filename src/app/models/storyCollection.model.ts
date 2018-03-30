import {Story} from './story.model'

export class StoryCollection {

  constructor(public sources: string, categories: string){}

  storyArray: Story[];

}
