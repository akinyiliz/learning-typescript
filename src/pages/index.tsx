import React, { FC, useRef, useState } from "react";

interface ChildProps {
	title: string;
	setFoo: React.Dispatch<React.SetStateAction<string>>;
	testRef: React.RefObject<HTMLButtonElement>;
}

const Child: FC<ChildProps> = ({ title, setFoo, testRef }) => {
	setFoo("hello");
	return <p>{`Hello from ${title}`}</p>;
};

const Index: FC = () => {
	const [count, setCount] = useState<number>(0);
	const [foo, setFoo] = useState<string>("");

	const testRef = useRef<HTMLButtonElement>(null);

	const addCount = () => {
		setCount(count + 1);
	};

	const divRef = useRef<HTMLDivElement>(null);

	return (
		<div
			ref={divRef}
			className="max-w-4xl mx-auto flex flex-col justify-center gap-6 items-center my-20 "
		>
			<h6 className="font-medium text-lg">{count}</h6>
			<button
				onClick={addCount}
				className="bg-[green]"
			>
				Add to count
			</button>
			<Child
				title="Child component"
				setFoo={setFoo}
				testRef={testRef}
			/>
		</div>
	);
};

export default Index;
