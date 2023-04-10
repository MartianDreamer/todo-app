import { getData } from "../persistence";

function getId() {
  const data = getData();
  if (data.length === 0) {
    return 0;
  }
  return Math.max(data.map((e) => e.id));
}

let currentId = null;

export default function Todo(title, description, isDone, expiredAt, priority) {
  if (!currentId) {
    currentId = getId();
  }
  this.id = ++currentId;
  this.createdAt = new Date().toLocaleDateString("en-CA");
  this.title = title;
  this.description = description;
  this.isDone = isDone;
  this.expiredAt = expiredAt;
  this.priority = priority;
}
