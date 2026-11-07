'use client';

import { Contact, Note } from '@prisma/client';
import { Card, Image, ListGroup } from 'react-bootstrap';
import NoteItem from './NoteItem';

const ContactCardAdmin = ({ contact, notes }: { contact: Contact & { owner: string }, notes: Note[] }) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={contact.image} width={75} alt={`${contact.firstName} ${contact.lastName}`} />
      <Card.Title>
        {contact.firstName}
        &nbsp;
        {contact.lastName}
        <Card.Subtitle>{contact.address}</Card.Subtitle>
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <Card.Text>{contact.description}</Card.Text>
      <ListGroup variant="flush">
        {notes.map((note) => <NoteItem key={note.id} note={note} />)}
      </ListGroup>
      <p className="blockquote-footer">{contact.owner}</p>
    </Card.Body>
  </Card>
);

export default ContactCardAdmin;