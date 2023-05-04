function SelectedBeast({ modalImg, modalDesc, imgClickHandler }) {
	return (
		<div className="selectedBeast" onClick={imgClickHandler}>
			<figure>
				<img src={modalImg} alt={modalDesc} />
				<figcaption>{modalDesc}</figcaption>
			</figure>
		</div>
	);
}
export default SelectedBeast;
