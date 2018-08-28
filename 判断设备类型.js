//判断设备类型  参考项目号FS ORD-270775-T8D9-Express study study-Bain*test* (p67024370)
//Script:

for(var i=1;i<9;i++)
{
  f('HidDevice')[i].set(null);
}

f('HidDevice')['1'].set(GetDeviceInfo().IsDesktop);
f('HidDevice')['2'].set(GetDeviceInfo().IsTouch);
f('HidDevice')['3'].set(GetDeviceInfo().IsTablet);
f('HidDevice')['4'].set(GetDeviceInfo().IsGeneric);
f('HidDevice')['5'].set(GetDeviceInfo().IsMobile);
f('HidDevice')['6'].set(GetDeviceInfo().ScreenResolution);
f('HidDevice')['7'].set(GetDeviceInfo().DeviceType);
f('HidDevice')['8'].set(GetDeviceInfo().DeviceType.toString());

//隐藏题

IsDesktop:  1
IsTouch:  2
IsTablet: 3
IsGeneric:  4
IsMobile: 5
ScreenResolution: 6
DeviceType: 7
DeviceType.toString():  8

//Script
if(f('HidDevice')['1'].toString()=='True'){f('Device').set('1');}
if(f('HidDevice')['3'].toString()=='True'){f('Device').set('2');}
if(f('HidDevice')['4'].toString()=='True'){f('Device').set('3');}
if(f('HidDevice')['5'].toString()=='True'){f('Device').set('4');}

//隐藏题

PC/Desktop  1
Tablet  2
Generic 3
Mobile  4
