import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";

interface InfoCardProps {
  icon: React.ElementType;
  title: string;
  date: string;
  children: React.ReactNode;
  link: string
}

export function InfoCard({ icon: Icon, title, date, children, link }: InfoCardProps) {
  return (
    <Card  placeholder={undefined}>
      <CardHeader
        className="flex items-center justify-between rounded-none overflow-visible"
        floated={false}
        shadow={false}  placeholder={undefined}      >
        <div className="flex flex-col gap-1 w-full">
          <Typography color="blue" className="font-bold text-xs"  placeholder={undefined}>
            {date && date}
          </Typography>
          <Typography color="blue-gray" variant="h5" className="w-full"  placeholder={undefined}>
            {link ? <a className="text-blue-600" target="_blank" href={link}>{title}</a> : title}
          </Typography>
        </div>
        <IconButton
          className="flex-shrink-0 pointer-events-none"
          ripple={false}  placeholder={undefined}        >
          <Icon className="h-5 w-5" strokeWidth={2} />
        </IconButton>
      </CardHeader>
      <CardBody className="grid justify-start !px-3.5 pt-2"  placeholder={undefined}>
        <Typography className=" font-normal !text-gray-500"  placeholder={undefined}>
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default InfoCard;
