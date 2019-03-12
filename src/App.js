import React from 'react'
import Contacts from './Contacts'
import { Header, Icon, Container } from 'semantic-ui-react'

class App extends React.Component {
  state = {
    contacts: [
      {id: 1, firstName: 'Jerry', phone: '801-121-5356'},
      {id: 2, firstName: 'George', phone: '801-666-5356'},
      {id: 3, firstName: 'Cosmo', phone: '801-121-6969'}
    ]
  }
  
render() {

  return (
    <Container  textAlign='center'>
      <Header as='h2' icon>
        <Icon name='users' circular />
        <Header.Content>React Contact List</Header.Content>
      </Header>
      <Contacts contactList={this.state.contacts} />  
    </Container>
    );
  }
}

export default App

//contact list could be anything! it's a prop and you can name it w/e you choose
