import { useQuery, useMutation} from '@tanstack/react-query';
import { Table, Button, Modal, Form, Input, message } from 'antd';
import { useState } from 'react';
import axiosClient from "../../api/axiosClient";
	
	// API giả lập
	// async function fetchProjects () {
	// 	const res = await fetch('http://localhost:3000/posts');
	// 	return res.data;
	// };
	async function fetchProjects() {
    const res = await axiosClient.get("/posts");
    return res.data;
  }
	// async function addProject (project){
	// 	const res = await fetch('http://localhost:3000/posts', {
	// 		method: 'POST',
	// 		headers: { 'Content-Type': 'application/json' },
	// 		body: JSON.stringify(project),
	// 	});
	// 	return res.data;
	// };
	
	// async function updateProject(project){
	// 	const res = await fetch(`http://localhost:3000/posts/${project.id}`, {
	// 		method: 'PUT',
	// 		headers: { 'Content-Type': 'application/json' },
	// 		body: JSON.stringify(project),
	// 	});
	// 	return res.data;
	// };
	
	// async function deleteProject(id){
	// 	await fetch(`http://localhost:3000/posts/${id}`, { method: 'DELETE' });
	// };
	function ProjectList() {
		const { data: projects, isLoading } = useQuery({ queryKey: ['projects'], queryFn: fetchProjects });
	
		const addMutation = useMutation({ mutationFn: addProject});
		const updateMutation = useMutation({ mutationFn: updateProject });
		const deleteMutation = useMutation({ mutationFn: deleteProject});
	
		const [isModalOpen, setIsModalOpen] = useState(false);
		const [editingProject, setEditingProject] = useState(null);
		const [form] = Form.useForm();
	
		const handleAdd = () => {
			setEditingProject(null);
			form.resetFields();
			setIsModalOpen(true);
		};
	
		const handleEdit = (project) => {
			setEditingProject(project);
			form.setFieldsValue(project);
			setIsModalOpen(true);
		};
	
		const handleDelete = (id) => {
			deleteMutation.mutate(id, { onSuccess: () => message.success('Xóa thành công!') });
		};
	
		const onFinish = (values) => {
			if (editingProject) {
				updateMutation.mutate({ ...editingProject, ...values }, { onSuccess: () => message.success('Cập nhật thành công!') });
			} else {
				addMutation.mutate(values, { onSuccess: () => message.success('Thêm mới thành công!') });
			}
			setIsModalOpen(false);
		};
	
		const columns = [
			{ title: 'Tên dự án', dataIndex: 'title', key: 'title' },
			{ title: 'Tên dự án', dataIndex: 'description', key: 'description' },
			{
				title: 'Hành động',
				key: 'action',
				render: (_, record) => (
					<>
						<Button onClick={() => handleEdit(record)} style={{ marginRight: 8 }}>Sửa</Button>
						<Button onClick={() => handleDelete(record.id)} danger>Xóa</Button>
					</>
				),
			},
		];
	
		if (isLoading) return <p>Đang tải dữ liệu...</p>;
	
		return (
			<div>
				<Button type="primary" onClick={handleAdd} style={{ marginBottom: 16 }}>Thêm Dự Án</Button>
				<Table columns={columns} dataSource={projects} rowKey="id" />
	<Modal title={editingProject ? 'Sửa Dự Án' : 'Thêm Dự Án'} open={isModalOpen} onCancel={() => setIsModalOpen(false)} onOk={form.submit}>
					<Form form={form} layout="vertical" onFinish={onFinish}>
						<Form.Item name="title" label="Tên Dự Án" rules={[{ required: true, message: 'Vui lòng nhập tên dự án!' }]}> 
							<Input />
						</Form.Item>
						<Form.Item name="description" label="Tên Dự Án" rules={[{ required: true, message: 'Vui lòng nhập tên dự án!' }]}> 
							<Input />
						</Form.Item>
					</Form>
				</Modal>
			</div>
		);
	}
	export default ProjectList;