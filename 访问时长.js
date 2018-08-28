//计算访问时长：
function startTime(section) {
 f("startTime")[section].set(new Date());
};

function endTime(section) {
 f("endTime")[section].set(new Date());
 f("totalTime")[section].set((new Date(f("endTime")[section]).valueOf()-new Date(f("startTime")[section]).valueOf())/1000);
};
