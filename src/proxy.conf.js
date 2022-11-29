var defaultTarget = 'http://api.cup2022.ir/';

module.exports = [
{
   context: ['/api/**'],
   target: defaultTarget,
   changeOrigin: true,
}
];