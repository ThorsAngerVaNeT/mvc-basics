import { baseUrl } from '../../data.js';

export class Controller {
  constructor(model, view, type) {
    this.model = model;
    this.view = view;
    this.type = type;
  }

  start() {
    this.view.drawSkeleton();
    this.view.linkListeners(this.model.isLoading, this.model.data);
    this.getAllData();
  }

  getAllData() {
    console.log('getAllData');
    this.model.getUsers({
      method: 'GET',
      url: `${baseUrl}/${this.type}`,
      element: this.view.usersContainer,
      event: this.view.event,
    });
  }
}
