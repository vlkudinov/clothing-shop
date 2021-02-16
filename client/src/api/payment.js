export const paymentIntent = async amount => {
	try {
		const res = await fetch('/create-billing-intent', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ amount })
		});
		return await res.json();

	} catch (error) {
		throw new Error('billing intent failed!');
	}
};