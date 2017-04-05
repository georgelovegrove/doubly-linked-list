import React, { Component } from 'react';

import { createMockData } from '../../../utils/mock-data-service';
import UserCard from '../../components/user-card';

import './user-ladder.css';

class UserLadder extends Component {

  constructor() {
    super();

    this.state = {
      doublyLinkedList: [],
    }
  }

  componentDidMount() {
    const doublyLinkedList = createMockData();
    this.setState({ doublyLinkedList });
  }

  formatLinkedList(doublyLinkedList) {
    const itemList = [];
    doublyLinkedList.forEach((item) => {
      itemList.push(item.data.data);
    })
    return itemList;
  }

  render() {
    const { doublyLinkedList } = this.state;

    const peopleList = this.formatLinkedList(doublyLinkedList);

    return (
      <div>
        { peopleList.map(person => {
          return (
            <UserCard key={person.id} person={person} />
          );
        })
        }
      </div>
    );
  }
}

export default UserLadder;
