import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  CardFooter,
  CardImg,
  CardText,
  CardBody,
  CardHeader,
  CardTitle,
  Button,
  CardGroup,
} from 'reactstrap';
import api from '../utils/api';
import styled from 'styled-components';

const SDiv = styled.div`
  margin: 10px 2.5px;
  border: 2px solid #33d2ff;
  margin-left: 100px;
  background: white;
  padding-bottom: 1110px;

  // Don't want pointer over whole card no more
  // &:hover {
  //   cursor: pointer;
  // }
`;

const IDiv = styled.div`
  text-align: center;
  margin: 1%;
`;

function RecipeDashboardCard(props) {
  console.log(props.data.org_name);
  const [toggle, setToggle] = useState(true);

  //states to handle edit form starts here
  const [colorToEdit, setColorToEdit] = useState(props.data);
  const [editing, setEditing] = useState(false);
  //states to handle edit form ENDS here
  console.log(colorToEdit);
  const loggedOn = api();

  const toggleOpen = () => {
    setToggle(!toggle);
  };

  const deleteItem = e => {
    e.preventDefault();
    api()
      .delete(`/api/campaigns/${props.data.id}`)
      .then(res => {
        console.log('Item was deleted');
        console.log(res);
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  };

  const saveEdit = e => {
    e.preventDefault();
    window.location.reload();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
    api()
      .put(`/api/recipes/${props.data.id}`, colorToEdit)
      .then(res => {
        console.log('coming from saveEdit', res);
      })
      .catch(err => {
        console.log('error from ColorList', err);
      });
  };

  return (
    <div>
      <SDiv className={toggle ? 'itemCard' : ''}>
        <CardGroup className="Styling-CardGroups">
          <CardBody>
            <strong>{`Recipe Title:`}</strong>
            <CardHeader className="CardHeader-Items">
              <CardTitle className="H1-CardItemCard">
                {`"${props.data.title}"`}
              </CardTitle>
            </CardHeader>
            <div>
              <CardImg
                className="card-image"
                src={props.data.photo_url}
                alt={''}
              />
              <hr className="Card-hr"></hr>
              <IDiv>
                <CardText>
                  <strong>{`Source: `}</strong>
                  {props.data.source}
                  <br />
                  {''}
                </CardText>
                <CardText>
                  <strong>{`Ingredients: `}</strong>
                  {props.data.ingredients}
                  <br />
                  <strong>{`Instructions: `}</strong>
                  <br></br>
                  {props.data.instructions} <br></br>
                  <strong>{`Category: `}</strong>
                  <br></br>
                  {props.data.category}
                </CardText>
                {toggle ? (
                  <Button
                    onClick={toggleOpen}
                    style={{ background: '#07A1C9' }}
                  >
                    Delete or Update
                  </Button>
                ) : (
                  <Button
                    onClick={toggleOpen}
                    style={{ background: '#C0392B' }}
                  >
                    Close Card
                  </Button>
                )}
              </IDiv>
            </div>
            <IDiv className={toggle ? 'hidden' : 'show'}>
              <CardText>
                <br />
                {''}
              </CardText>

              <CardFooter className="Footer-Buttons">
                {/* SaveEdits form stats here */}
                {loggedOn && (
                  <form onSubmit={saveEdit}>
                    <legend>Edit Recipe:</legend>
                    <label>
                      Title:
                      <input
                        onChange={e =>
                          setColorToEdit({
                            ...colorToEdit,
                            title: e.target.value,
                          })
                        }
                        placeholder="Enter Title Here:"
                        value={colorToEdit.title}
                      />
                    </label>
                    <label>
                      Source:
                      <input
                        onChange={e =>
                          setColorToEdit({
                            ...colorToEdit,
                            description: e.target.value,
                          })
                        }
                        value={colorToEdit.description}
                      />
                    </label>
                    <label>
                      Ingredients:
                      <input
                        onChange={e =>
                          setColorToEdit({
                            ...colorToEdit,
                            source: e.target.value,
                          })
                        }
                        value={colorToEdit.source}
                      />
                    </label>
                    <label>
                      Instructions:
                      <input
                        onChange={e =>
                          setColorToEdit({
                            ...colorToEdit,
                            instructions: e.target.value,
                          })
                        }
                        value={colorToEdit.instructions}
                      />
                    </label>
                    <label>
                      Category:
                      <input
                        onChange={e =>
                          setColorToEdit({
                            ...colorToEdit,
                            category: e.target.value,
                          })
                        }
                        value={colorToEdit.category}
                      />
                    </label>
                    <div className="button-row">
                      <Button type="submit" className="SaveEditButton">
                        Save Edit
                      </Button>
                      <Button
                        onClick={`Cancel edit${() => {
                          return <div className="hidden">cancel</div>;
                        }}`}
                      >
                        Cancel Edit
                      </Button>
                    </div>
                  </form>
                )}
                <div>
                  {loggedOn && (
                    <Button onClick={deleteItem} className="Items-Buttons">
                      Delete Recipe
                    </Button>
                  )}
                </div>
              </CardFooter>
            </IDiv>
          </CardBody>
        </CardGroup>
      </SDiv>
    </div>
  );
}

//I just set it up this way in case i needed it to use it
function mapStateToProps(state) {
  return {
    none: '',
  };
}

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeDashboardCard);
