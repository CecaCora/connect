import Nav from './Nav';
import Bullet from './Bullet';

console.log('Connect is now running!');

Nav();

let root = Bullet('root');
console.log(root);
root.createChildNode(root.ref);
console.log(root.childrenNodes[0]);
