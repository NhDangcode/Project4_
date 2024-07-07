using backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace backend.Controllers
{
    [Route("api/company")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        private readonly FinalContext db;
        public CompanyController(FinalContext _db)
        {
            db = _db;
        }
        [HttpGet("all")]
        public async Task<ActionResult<IEnumerable<Company>>> GetAllCompany()
        {
            if (db.Companies == null)
            {
                return Ok(new
                {
                    message = "Dữ liệu trống!",
                    status = 404
                });
            }
            var _data = await db.Companies.ToListAsync();
            return Ok(new
            {
                message = "Lấy dữ liệu thành công!",
                status = 200,
                data = _data
            }); ;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Company>>> GetCategory(Guid id)
        {
            if (db.Companies == null)
            {
                return Ok(new
                {
                    message = "Dữ liệu trống!",
                    status = 404
                });
            }
            var _data = await db.Companies.Where(x => x.Id == id).ToListAsync();
            return Ok(new
            {
                message = "Lấy dữ liệu thành công!",
                status = 200,
                data = _data
            }); ;
        }
        [HttpPost("add")]
        public async Task<ActionResult> AddCompany([FromBody] Company company)
        {
            var _company = await db.Companies.Where(x => x.Htag.Equals(company.Htag)).ToListAsync();
            if (_company.Count != 0)
            {
                return Ok(new
                {
                    message = "Tạo thất bại!",
                    status = 400,
                });
            }
            await db.Companies.AddAsync(company);
            await db.SaveChangesAsync();
            return Ok(new
            {
                message = "Tạo thành công!",
                status = 200,
                data = company
            });
        }
        [HttpPut("edit")]

        public async Task<ActionResult> Edit([FromBody] Company company)
        {
            var _company = await db.Companies.FindAsync(company.Id);
            if (_company == null)
            {
                return Ok(new
                {
                    message = "Dữ liệu không tồn tại!",
                    status = 400
                });
            }
            db.Entry(await db.Companies.FirstOrDefaultAsync(x => x.Id == company.Id)).CurrentValues.SetValues(company);
            await db.SaveChangesAsync();
            return Ok(new
            {
                message = "Sửa thành công!",
                status = 200
            });
        }
        [HttpDelete("delete")]

        public async Task<ActionResult> Delete([FromBody] Guid id)
        {
            if (db.Companies == null)
            {
                return Ok(new
                {
                    message = "Dữ liệu trống!",
                    status = 404
                });
            }
            var _company = await db.Companies.FindAsync(id);
            if (_company == null)
            {
                return Ok(new
                {
                    message = "Dữ liệu trống!",
                    status = 404
                });
            }
            try
            {
                db.Companies.Remove(_company);
                await db.SaveChangesAsync();
                return Ok(new
                {
                    message = "Xóa thành công!",
                    status = 200
                });
            }
            catch (Exception e)
            {
                return Ok(new
                {
                    message = "Lỗi rồi!",
                    status = 400,
                    data = e.Message
                });
            }
        }

    }
}
