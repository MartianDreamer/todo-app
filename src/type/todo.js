
export default function Todo(title, description, isDone, expiredAt, priority) {
  this.id = 0;
  this.createdAt = new Date().toLocaleDateString("en-CA");
  this.title = title;
  this.description = description;
  this.isDone = isDone;
  this.expiredAt = expiredAt;
  this.priority = priority;
}
