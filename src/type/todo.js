export default function Todo(title, description, isDone, expiredAt, priority) {
  this.createdAt = new Date();
  this.title = title;
  this.description = description;
  this.isDone = isDone;
  this.expiredAt = expiredAt;
  this.priority = priority;
}
