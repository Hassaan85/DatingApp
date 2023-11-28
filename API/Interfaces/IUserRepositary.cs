

using API.DTOs;
using API.Entities;
using AutoMapper.Execution;

namespace API.Interfaces
{
    public interface IUserRepositary
    {
        void update (AppUser user);

        Task<bool>SaveAllAsync();

        Task<IEnumerable<AppUser>> GetUsersAsync();

        Task<AppUser>GetUserByIdAsync(int id);

        Task<AppUser>GetUserByUsernameAsync(string username);

        Task<IEnumerable<MemberDTO>>GetMemberAsync();
        Task<MemberDTO>GetMemberAsync (string username);
    }
}