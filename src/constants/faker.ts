import { IUser, ITodo, ITask } from "../lib/interfaces";

export const user: IUser = {
  name: "Matteo",
  email: "matteo@gmail.com",
  avatar: "/images/avatar_linux.jpg",
};

export const todos: ITodo[] = [
  {
    description: "Il mio primo todo",
    done: false,
    id: 1,
    priority: 1,
  },
  {
    description: "Studia calcolo 2",
    done: false,
    id: 2,
    priority: 1,
  },
];

export const tasks: ITask[] = [
  {
    todoId: 1,
    description: "fai qualcosa una volta",
    done: true,
    id: 1,
  },
  {
    todoId: 1,
    description: "fai qualcosaltro due volte",
    done: false,
    id: 2,
  },
  {
    todoId: 1,
    description:
      "      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur iure inventore debitis. Suscipit consectetur quasi impedit nostrum accusantium facere commodi minus voluptates. Doloribus iure animi quidem enim. Delectus culpa recusandae deserunt porro ratione excepturi eos odio et hic? Praesentium nobis eligendi aliquam perferendis, fuga accusantium accusamus quos excepturi eveniet distinctio alias sed error laborum nam optio? Perspiciatis ea eveniet quae possimus excepturi eaque sit tenetur ducimus iste iure doloribus exercitationem sint, tempora recusandae, aut quam esse. Cumque, nihil modi sit odit ducimus, pariatur minus ab adipisci reprehenderit nesciunt omnis! Aut tempore ullam debitis, voluptatibus alias provident? Repellendus perferendis vitae molestias soluta deserunt nesciunt eligendi aspernatur tempora error ipsum officia sed dolorum at odio animi voluptas adipisci, labore aliquam. Molestiae aliquid sit tenetur eligendi dolorum nulla beatae. Doloribus esse debitis accusantium beatae sint? Facilis autem adipisci necessitatibus obcaecati corporis. Doloremque aperiam sunt eius adipisci quas nulla eaque quisquam nam nostrum illo pariatur itaque voluptas fugiat, cum magni deserunt ducimus. Aperiam soluta consequatur ipsa blanditiis dignissimos ipsum illo nisi labore corporis voluptates debitis nesciunt placeat, sint neque sed. Unde facere, officiis eveniet, placeat quia laborum inventore voluptate illo quasi ullam omnis natus quaerat repudiandae? Quis suscipit rerum possimus, voluptatum ex modi dignissimos.",
    done: false,
    id: 2,
  },
  {
    todoId: 2,
    description: "studia",
    done: false,
    id: 3,
  },
];
