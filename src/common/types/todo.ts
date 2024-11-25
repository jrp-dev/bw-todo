export type TStatus = 'Pending' | 'In Progress' | 'Completed'

export type TTodoItem = {
  id: string;
  title: string;
  description: string;
  status: TStatus;
  due_date: string;
};

export type TRowActions = {
  onEdit: (arg: TTodoItem) => void;
  onDelete: (arg: TTodoItem) => void;
};