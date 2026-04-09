const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.Anchor,
		C3.Plugins.Sprite,
		C3.Behaviors.scrollto,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Behaviors.Pin,
		C3.Plugins.Mouse,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Keyboard.Cnds.OnKeyReleased,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{Âncora: 0},
	{PlanoDeFundoEmBlocos: 0},
	{CentrarEm: 0},
	{Plataforma: 0},
	{RestritoAoLayout: 0},
	{kael: 0},
	{Sólido: 0},
	{plataforma: 0},
	{Teclado: 0},
	{drone: 0},
	{plataforma2: 0},
	{barril: 0},
	{Fixar: 0},
	{PlanoDeFundoEmBlocos2: 0},
	{botão: 0},
	{Mouse: 0},
	{nucleoQuebrado: 0},
	{choque: 0}
];

self.InstanceType = {
	PlanoDeFundoEmBlocos: class extends self.ITiledBackgroundInstance {},
	kael: class extends self.ISpriteInstance {},
	plataforma: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	drone: class extends self.ISpriteInstance {},
	plataforma2: class extends self.ISpriteInstance {},
	barril: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos2: class extends self.ITiledBackgroundInstance {},
	botão: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	nucleoQuebrado: class extends self.ISpriteInstance {},
	choque: class extends self.ISpriteInstance {}
}