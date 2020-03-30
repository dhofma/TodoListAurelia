using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using TodoClassLib;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;

namespace TodoListWebAPI.Controllers
{
    [EnableCors("AllowAllHeaders")]
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        readonly ITodoRepository repository;

        public TodoController(ITodoRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Todo>> GetAll()
        {
            return repository.ReadAll().ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Todo> GetItem(int id)
        {
            if (id <= 0)
                return NotFound();
            Todo item = repository.Read(id);
            if (item == null)
                return NotFound();
            else
                return item;
        }

        [HttpPost]
        public ActionResult<Todo> Create([FromBody] Todo item)
        {
            if (repository.Create(item))
            {
                return item;
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpPut]
        public ActionResult<Todo> Update([FromBody] Todo item)
        {
            if (repository.Update(item))
                return item;
            else
                return BadRequest();
        }

        [HttpDelete]
        public ActionResult Delete([FromBody] int id)
        {
            if (id <= 0)
                return NotFound();
            else
            {
                repository.Delete(id);
                return Ok();
            }
        }
    }
}