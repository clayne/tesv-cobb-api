// as recommended by http://lua-users.org/wiki/ThreadsTutorial

#define lua_lock(L) LuaLock(L)
#define lua_unlock(L) LuaUnlock(L)
#define lua_userstateopen(L) LuaLockInitial(L)
#define lua_userstatethread(L,L1) LuaLockInitial(L1)  // Lua 5.1

void LuaLockInitial(lua_State * L);
void LuaLockFinal(lua_State * L);
void LuaLock(lua_State * L);
void LuaUnlock(lua_State * L);

#ifdef __cplusplus
extern "C" {
#endif
   typedef void(*CobbDebugBadThreadHandler)(unsigned long threadID);
   void CobbDebugSetBadThreadHandler(CobbDebugBadThreadHandler);
#ifdef __cplusplus
};
#endif