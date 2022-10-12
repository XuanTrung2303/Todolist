//interface khởi tạo một mảng và gắn giá trị ban đầu cho nó

export interface FilterButton{
  type: Filter,
  label: string;
  isActive: boolean;
}


export enum Filter {
  All,
  Active,
  Completed,
}
