﻿using System;
using System.Collections.Generic;
using System.Text;

namespace TodoClassLib
{
    public interface ITodoRepository
    {
        IEnumerable<Todo> ReadAll();

        bool Create(Todo todoItem);
        Todo Read(int id);
        bool Update(Todo itemToUpdate);
        void Delete(int id);
    }
}
