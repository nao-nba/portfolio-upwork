type Props = {
  label: string;
};

export const Tag = ({ label }: Props) => (
  <span className="text-xs font-medium bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full">
    {label}
  </span>
);
