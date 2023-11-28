using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[Authorize]

public class UsersController : BaseApiController
{
  private readonly IUserRepositary _userRepositary;

  private readonly IMapper _mapper;

  public UsersController(IUserRepositary userRepositary)
  {
    _userRepositary =  userRepositary;

  }

  [HttpGet]
  public async Task <ActionResult<IEnumerable<MemberDTO>>> GetUsers()
  {
    var users= await _userRepositary.GetMemberAsync();

   //below commented since we using projection

    // var usersToReturn = _mapper.Map<IEnumerable<MemberDTO>>(users);

    return Ok(users);
 

  }

  [HttpGet ("{username}")]
  public async Task <ActionResult <MemberDTO>>GetUser (string username)
  {
    return await _userRepositary.GetMemberAsync(username);

    //below commented since we using projection

    //  return _mapper.Map<MemberDTO>(user);
  }
}


