import { v4 as uuidv4 } from 'uuid';

const Bullet = (parentId) => {
  const id = uuidv4();
  const parentNodeId = parentId;
  const childrenNodes = [];
  const notes = [];
  const dueDate = '';

  const getNodeId = () => id;

  const createChildNode = () => {
    const newChildNode = Bullet(getNodeId());
    childrenNodes.push(newChildNode);
  };

  return { id, parentNodeId, childrenNodes, notes, dueDate, getNodeId, createChildNode };
};

export default Bullet;
