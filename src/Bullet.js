import App from './App';
import { v4 as uuidv4 } from 'uuid';

const Bullet = (parentId) => {
  let bullet = {
    nodeId: uuidv4(),
    parentNodeId: parentId,
    childrenNodes: [],
    content: '',
    notes: '',
    dueDate: '',
    labels: [],
  };

  const getBullet = () => bullet;

  const setBullet = (changes) => {
    bullet = { ...bullet, ...changes };
  };

  const addChildNode = () => {
    const newChildNode = Bullet(getNodeId());
    bullet.childrenNodes.push(newChildNode);
  };

  const createNode = () => {
    let newNode = document.createElement('div');
    newNode.setAttribute('contenteditable', 'true');
    newNode.setAttribute('tabindex', '-1');
    newNode.setAttribute('data-id', bullet.nodeId);

    newNode.addEventListener('keydown', (e) => {
      switch (e.code) {
        case 'Enter':
          e.preventDefault();
          Bullet().createNode();
      }
    });

    document.querySelector('main').appendChild(newNode).focus();
  };

  return { getBullet, setBullet, addChildNode, createNode };
};

export default Bullet;
