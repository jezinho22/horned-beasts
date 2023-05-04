function SelectedBeast({ modalImg, imgClickHandler }) {
	return (
		<div className="selectedBeast" onClick={imgClickHandler}>
			<figure>
				<img src={modalImg.image} alt={modalImg.description} />
				<figcaption>{modalImg.description}</figcaption>
			</figure>
		</div>
	);
}
export default SelectedBeast;
