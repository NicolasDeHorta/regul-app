import './footer.scss';

export const Footer = () => {
	return (
		<div className="footerWrapper">
			<div className="footerMiddleDiv">
				<div>
					Casa Central <br />
					Av. 18 de julio 1126 <br />
					Teléfono: 2908 3346 - 2908 3374*
				</div>
				<div>
					Sucursal Union <br />
					Av. 8 de Octubre 3671 <br />
					Teléfono: 2508 1515*
				</div>
			</div>
			<p>
				Corresponsal Financiero, esta entidad se encuentra habilitada a
				prestar servicios de recepción de fondos con el único fin de ser
				depositados en las instituciones de intermediación financiera de
				las cuales son corresponsales.
			</p>
			<p className="footerBold">
				Esta entidad financiera NO ESTÁ AUTORIZADA A RECIBIR DEPÓSITOS.{' '}
			</p>
			<p>
				Institución autorizada y supervisada por el BANCO CENTRAL DEL
				URUGUAY . Por más información puede acceder a www.bcu.gub.uy
			</p>
			<p>
				© Copyright {new Date().getFullYear()} - Cambio Regul - Todos
				los derechos reservados
			</p>
		</div>
	);
};
