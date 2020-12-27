using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using LinkPro.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace LinkPro.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class ProfileController : ControllerBase
    {
        private readonly DataBaseContext _context;
        private readonly IWebHostEnvironment _hostWebEnvironment;
        public ProfileController(DataBaseContext context, IWebHostEnvironment hostWebEnvironment)
        {
            _context = context;
            _hostWebEnvironment = hostWebEnvironment;
        }

        // GET: Profile
        [HttpGet("{action}")]
        public async Task<IActionResult> Index()
        {
            return Ok(await _context.tProfile
                .Select(a => new ProfileModel {
                    Id = a.Id,
                    ProfileName = a.ProfileName,
                    Occupation = a.Occupation,
                    ImageFile = a.ImageFile,
                    ImageName = a.ImageName,
                    ImageSrc = string.Format("{0}://{1}{2}/Images/{3}", Request.Scheme, Request.Host, Request.PathBase, a.ImageName)
                }).ToListAsync());
        }

        // GET: Profile/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var profileModel = await _context.tProfile
                .FirstOrDefaultAsync(m => m.Id == id);
            if (profileModel == null)
            {
                return NotFound();
            }

            return Ok(profileModel);
        }

        // GET: Profile/Create
        public IActionResult Create()
        {
            return Ok();
        }

        // POST: Profile/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost("{action}")]

        public async Task<IActionResult> Create([FromForm] ProfileModel profileModel)
        {
            if (ModelState.IsValid)
            {
                if(profileModel.Id==0)
                {
                    profileModel.ImageName = await SaveImage(profileModel.ImageFile);
                    _context.Add(profileModel);
                    await _context.SaveChangesAsync();
                    return RedirectToAction(nameof(Index));
                }
                else
                {
                    if (profileModel.ImageFile != null)
                    {
                        DeleteImage(profileModel.ImageName);
                        profileModel.ImageName = await SaveImage(profileModel.ImageFile);
                    }
                   
                    _context.Update(profileModel);
                    await _context.SaveChangesAsync();
                }
              
            }
            return Ok(profileModel);
        }

       
        
        // POST: Profile/Delete/5
        [HttpGet("{action}")]
      
        public async Task<IActionResult> DeleteProfile(int id)
        {
            var profileModel = await _context.tProfile.FindAsync(id);
            DeleteImage(profileModel.ImageName);
            _context.tProfile.Remove(profileModel);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ProfileModelExists(int id)
        {
            return _context.tProfile.Any(e => e.Id == id);
        }
        [NonAction]
        public async Task<string> SaveImage(IFormFile imageFile)
        {
            string imageName =
                new String(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ', '-');
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
            var imagePath = Path.Combine(_hostWebEnvironment.ContentRootPath, "Images", imageName);
            using (var fileStream = new FileStream(imagePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(fileStream);
            }
            return imageName;
        }
        [NonAction]
        public void DeleteImage(string imageName)
        {          
            var imagePath = Path.Combine(_hostWebEnvironment.ContentRootPath, "Images", imageName);
            if(System.IO.File.Exists(imagePath))
            {
                System.IO.File.Delete(imagePath);
            }
        }
    }
}
