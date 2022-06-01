import React from 'react';

function BoardInsert() {
  return
  {
    <div>안녕</div>
  }
}

export default BoardInsert;
// import React, { ChangeEvent, FormEvent, useState } from 'react';

// type BoardInsertProps = {
//   onInsert: (text: string) => void;
// };

// function BoardInsert({ onInsert }: BoardInsertProps) {
//   const [value, setValue] = useState('');
//   const onChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setValue(e.target.value);
//   };
//   const onSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     onInsert(value);
//     setValue('');
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <input
//         placeholder="게시글."
//         value={value}
//         onChange={onChange}
//       />
//       <button type="submit">등록</button>
//     </form>
//   );
// }

// export default BoardInsert;