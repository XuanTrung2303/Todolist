export class Todo {
  // id: number;
  // content: string;
  // isCompleted: boolean;

  // constructor(id: number, content: string){
  //   this.id = id;
  //   this.content = content;
  //   this.isCompleted = false;
  // }
  // Sử dụng class khi mà bạn muốn khởi tạo một cái class mới và muốn gán cho
  //giá trị ban đầu khi khởi tạo tên class mới
  constructor(
    public id: number,
    public content: string,
    public isCompleted: boolean=false
  ){}
}
