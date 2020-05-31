import React from 'react';
import { Card, Icon, Image, Button, Modal, Header } from 'semantic-ui-react';

export default function RecipeThumbnail({ recipe, addToFavourite }) {
  const id = localStorage.getItem('id');
  return (
    <div>
      <Card>
        <Image src={recipe.photo_url} wrapped ui={true} />
        <Card.Content>
          <Card.Header>{recipe.title}</Card.Header>
          <Card.Meta>
            <span className="date">
              <Icon name="source" />
              {recipe.source}
            </span>
          </Card.Meta>
          <Card.Description>
            Ingredients: {recipe.ingredients}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="/home">
            <Icon name="paw" />
            Instructions: {recipe.instructions}
          </a>
        </Card.Content>
        <Button
          color="red"
          content="Like"
          icon="heart"
          label={{
            basic: true,
            color: 'red',
            pointing: 'left',
            content: '100',
          }}
          onClick={() => addToFavourite(id, recipe.id)}
        />
        <Modal
          size="tiny"
          centered="true"
          trigger={
            <Button
              color="blue"
              content="detail"
              icon="world"
              label={{ basic: true, color: 'red', pointing: 'left' }}
            />
          }
        >
          <Modal.Header>{recipe.title}</Modal.Header>
          <Modal.Content image>
            <Image wrapped size="medium" src={recipe.photo_url} />
            <Modal.Description>
              <Header>{recipe.title}</Header>
              <p>Source : {recipe.source}</p>
              <p>Ingredients: {recipe.ingredients}</p>
              <p>Instructions: {recipe.instructions}</p>
              <p>Category: {recipe.category}</p>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </Card>
    </div>
  );
}
